// ./src/views/AdminCategories.vue
<template>
  <div class="container py-5">
    <!-- 1. 使用先前寫好的 AdminNav -->
    <AdminNav />

    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input
            type="text"
            v-model="newCategoryName"
            class="form-control"
            placeholder="新增餐廳類別..."
          />
        </div>
        <div class="col-auto">
          <button
            type="button"
            @click.stop.prevent="createCategory"
            class="btn btn-primary"
          >
            新增
          </button>
        </div>
      </div>
    </form>
    <table class="table">
      <Spinner v-if="isLoading" />
      <template v-else>
        <thead class="thead-dark">
          <tr>
            <th scope="col" width="60">#</th>
            <th scope="col">Category Name</th>
            <th scope="col" width="210">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in categories" :key="category.id">
            <th scope="row">
              {{ category.id }}
            </th>
            <td class="position-relative">
              <div
                v-show="!category.isEditing"
                @click.stop.prevent="toggleIsEditing(category.id)"
                class="category-name"
              >
                {{ category.name }}
              </div>
              <input
                v-model="category.name"
                v-show="category.isEditing"
                type="text"
                class="form-control"
              />
              <span
                v-show="category.isEditing"
                @click.stop.prevent="handleCancel(category.id)"
                class="cancel"
                >✕</span
              >
            </td>
            <td class="d-flex justify-content-between">
              <button
                type="button"
                v-show="!category.isEditing"
                @click.stop.prevent="toggleIsEditing(category.id)"
                class="btn btn-link mr-2"
              >
                Edit
              </button>
              <button
                type="button"
                v-show="category.isEditing"
                @click.stop.prevent="
                  updateCategory({
                    categoryId: category.id,
                    name: category.name,
                  })
                "
                class="btn btn-link mr-2"
              >
                Save
              </button>
              <button
                type="button"
                @click.stop.prevent="deleteCategory(category.id)"
                class="btn btn-link mr-2"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </template>
    </table>
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav.vue";
import Spinner from "../components/Spinner.vue";
import adminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";

export default {
  name: "AdminCategories",
  components: {
    AdminNav,
    Spinner,
  },
  data() {
    return {
      categories: [],
      newCategoryName: "",
      isLoading: true,
    };
  },
  methods: {
    async fetchCategories() {
      try {
        this.isLoading = true;
        const { data } = await adminAPI.categories.get();
        this.categories = data.categories.map((category) => ({
          ...category,
          nameCached: "",
          isEditing: false,
        }));
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳類別資料，請稍後再試",
        });
      }
    },
    async createCategory() {
      // todo 透過API 向後端伺服器新增 category
      try {
        if (
          this.categories.find(
            (category) => category.name === this.newCategoryName.trim()
          )
        ) {
          Toast.fire({
            icon: "warning",
            title: "此類別已存在",
          });
          this.newCategoryName = "";
          return;
        } else {
          const { data } = await adminAPI.categories.create({
            name: this.newCategoryName,
          });
          if (data.status !== "success") {
            throw new Error(data.message);
          }
          Toast.fire({
            icon: "success",
            title: "新增成功",
          });
          this.newCategoryName = "";
          // 重新發送 get api
          this.fetchCategories();
        }
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法儲存餐廳類別，請稍後再試",
        });
      }
    },
    async deleteCategory(categoryId) {
      try {
        const { data } = await adminAPI.categories.delete({ categoryId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.categories = this.categories.filter(
          (category) => category.id != categoryId
        );
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法刪除餐廳類別，請稍後再試",
        });
      }
    },
    toggleIsEditing(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            isEditing: !category.isEditing,
            nameCached: category.name,
          };
        } else {
          return category;
        }
      });
    },
    async updateCategory({ categoryId, name }) {
      // Todo 透過API回傳至伺服器
      try {
        const { data } = await adminAPI.categories.update({ categoryId, name });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.toggleIsEditing(categoryId);
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法修改餐廳類別，請稍後再試",
        });
      }
    },
    handleCancel(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            name: category.nameCached,
          };
        } else {
          return category;
        }
      });
      this.toggleIsEditing(categoryId);
    },
  },
  created() {
    this.fetchCategories();
  },
};
</script>

<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>