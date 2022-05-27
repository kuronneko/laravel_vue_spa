<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col-lg-12">
                        <div class="card bg-dark text-white">
                            <div class="card-header">
                <router-link :to='{ name: "crearBlog" }' class="btn btn-info text-white">Nuevo Blog</router-link>
                            </div>
                            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-dark table-hover">
                        <thead class="bg-dark text-white">
                            <tr>
                                <th>ID</th>
                                <th>Titulo</th>
                                <th>Contenido</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr v-for="blog in blogs" :key="blog.id">
                                <td>{{ blog.id }}</td>
                                <td>{{ blog.titulo }}</td>
                                <td>{{ blog.contenido }}</td>
                                <td>
                                    <div class="btn-group">
                                    <router-link :to='{ name: "editarBlog", params: { id: blog.id } }' class="btn btn-info text-white">
                                        Editar</router-link>
                                    <a type="button" @click="borrarBlog(blog.id)" class="btn btn-danger">Borrar</a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                            </div>
                        </div>
            </div>
        </div>
    </div>



</template>

<script>
export default {
    name: "blogs",
    data() {
        return {
            blogs: []
        }
    },
    mounted() {
        this.mostrarBlogs()
    },
    methods: {
        async mostrarBlogs() {
            await this.axios.get('/api/blog')
                .then(response => {
                    this.blogs = response.data
                })
                .catch(error => {
                    this.blog = []
                })
        },
        borrarBlog(id) {
            if (confirm("Confirmar eliminar el registro?")) {
                this.axios.delete(`/api/blog/${id}`)
                    .then(response => {
                        this.mostrarBlogs()
                    })
                    .catch(error => {
                        console(error)
                    })
            }
        }
    }
}
</script>

<style>
</style>
