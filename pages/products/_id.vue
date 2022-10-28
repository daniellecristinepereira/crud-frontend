<template>
    <div>
        <div
            class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black ">
            <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
                <div class="grid grid-cols-1 p-2 gap-10">
                    <div
                        class="relative flex flex-col min-w-0 break-words bg-gray-50  w-full shadow-lg rounded">
                        <div class="rounded-t mb-0 px-0 border-0">
                            <div class="flex flex-wrap items-center px-4 py-2">
                                <div class="relative w-full max-w-full flex-grow flex-1">
                                <h3 class="font-semibold text-base text-gray-900 ">EDITAR PRODUTO </h3>
                                </div>
                                <div class="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                                    <div class="max-w-lg w-full lg:max-w-xs">
                                        <label for="search" class="sr-only"> </label>
                                        <form methode="get" action="#" class="relative z-50">
                                            <button type="submit" id="searchsubmit"
                                                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <svg class="h-5 w-5 text-gray-400" fill="currentColor"
                                                    viewBox="0 0 20 20">
                                                    <path fill-rule="evenodd"
                                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </button>
                                            <input type="text" name="s" id="s"
                                                class="block w-full pl-10 pr-3 py-2 border border- rounded-md leading-5 bg-white-200 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out"
                                                placeholder="Pesquisar produto">
                                        </form>
                                    </div>
                                </div>
                                <div class="relative w-full max-w-full flex-grow flex-1 text-right">
                                    <router-link to="/products"
                                        class="bg-teal-400 text-white active:bg-blue-600 dark:text-gray-800 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                        VOLTAR</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Clientes  -->
                <div class="mt-2 mx-2">
                    <div class="w-full overflow-hidden rounded-lg shadow-xs">

                        <!-- formulario -->

                        <div class="max-w-2xl mx-auto bg-white p-16">
                            <form @submit="sendForm($event)">
                                <div class="grid gap-6 mb-6 lg:grid-cols-1">
                                    <div>
                                        <label for="name"
                                            class="block mb-2 text-sm font-medium text-gray-900 ">Nome
                                            do produto</label>
                                        <input type="text" v-model="name"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Descreva o nome do produto" >
                                        <!-- usada para imprimir resultado ou valor da variavel {{ name }} -->
                                    </div>

                                    <div>
                                        <label for="price"
                                            class="block mb-2 text-sm font-medium text-gray-900 ">Preço
                                            do produto</label>
                                        <input type="text" v-model="price"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Ex.: R$1.250,00" >
                                        <!-- usada para imprimir resultado ou valor da variavel {{ price }} -->

                                    </div>

                                    <div>
                                        <label for="number"
                                            class="block mb-2 text-sm font-medium text-gray-900 ">Quantidade
                                            estoque</label>
                                        <input type="number" v-model="stock"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 "
                                            placeholder="Ex.: 10"  >
                                        <!--usada para imprimir resultado ou valor da variavel {{ stock }} -->
                                    </div>

                                </div>

                                <div class="relative w-full max-w-full flex-grow flex-1 text-right">
                                    <button 
                                        class="bg-teal-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Salvar
                                    </button>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>

export default {
    data() {
        return {
            name: '',
            price: '',
            stock: '',
        }
    },
    mounted() {
            this.getProduct()
        },
    methods: {
        async getProduct(){
            await this.$axios.$get(`/products/${this.$route.params.id}`).then(success => {
                this.name = success.name;
                this.price = success.price.$numberDecimal;
                this.stock = success.stock;
            })
        },
        async sendForm($event) {
            $event.preventDefault();
            const filds = {
                name: this.name,
                price: this.$format_money(this.price),
                stock: this.stock,
            }
            
            await this.$axios.$put(`/products/${this.$route.params.id}`, filds).then(success => {
                this.$router.push({path: '/products'})
            }).catch(error => {
                console.log (error);
            });
        }
    }
}
</script>