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
                updateCategory({ categoryId: category.id, name: category.name })
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
    </table>
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav.vue";
import { v4 as uuidv4 } from "uuid";

const dummyData = {
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2019-06-22T09:00:43.000Z",
      updatedAt: "2019-06-22T09:00:43.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2019-06-22T09:00:43.000Z",
      updatedAt: "2019-06-22T09:00:43.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2019-06-22T09:00:43.000Z",
      updatedAt: "2019-06-22T09:00:43.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2019-06-22T09:00:43.000Z",
      updatedAt: "2019-06-22T09:00:43.000Z",
    },
  ],
};

export default {
  name: "AdminCategories",
  components: {
    AdminNav,
  },
  data() {
    return {
      categories: [],
      newCategoryName: "",
    };
  },
  methods: {
    fetchCategories() {
      this.categories = dummyData.categories.map((category) => ({
        ...category,
        nameCached: "",
        isEditing: false,
      }));
    },
    createCategory() {
      // todo 透過API 向後端伺服器新增 category
      if (
        this.categories.find(
          (category) => category.name === this.newCategoryName.trim()
        )
      ) {
        alert("此類別已存在");
        this.newCategoryName = "";
        return;
      } else {
        this.categories.push({
          id: uuidv4(),
          name: this.newCategoryName,
        });
        this.newCategoryName = "";
      }
    },
    deleteCategory(categoryId) {
      console.log(categoryId);
      this.categories = this.categories.filter(
        (category) => category.id != categoryId
      );
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
    updateCategory({ categoryId, name }) {
      // Todo 透過API回傳至伺服器
      console.log(name);
      this.toggleIsEditing(categoryId);
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