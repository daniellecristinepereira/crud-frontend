<template>
    <div>
        <div
            class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
            <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
                <div class="grid grid-cols-1 p-2 gap-10">
                    <div
                        class="relative flex flex-col min-w-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
                        <div class="rounded-t mb-0 px-0 border-0">
                            <div class="flex flex-wrap items-center px-4 py-2">
                                <div class="relative w-full max-w-full flex-grow flex-1">
                                <h3 class="font-semibold text-base text-gray-900 dark:text-gray-50">EDITAR PEDIDO </h3>
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
                                    <router-link to="/customers"
                                        class="bg-teal-400 text-white active:bg-blue-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
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
                                            class="block mb-2 text-sm font-medium text-gray-900 ">Nome</label>
                                        <input type="text" v-model="name"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                            placeholder="Descreva o nome do produto" >
                                        <!-- usada para imprimir resultado ou valor da variavel {{ name }} -->
                                    </div>

                                    <div>
                                        <label for="sales"
                                            class="block mb-2 text-sm font-medium text-gray-900 ">Data do pedido</label>
                                        <input type="text" v-model="phone"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                            placeholder="" >
                                        <!-- usada para imprimir resultado ou valor da variavel {{ price }} -->

                                    </div>

                                    <div>
                                        <label for="email"
                                            class="block mb-2 text-sm font-medium text-gray-900 ">E-mail</label>
                                        <input type="text" v-model="email"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                            placeholder="">
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
            date: '',
            customers: '',
        }
    },
    mounted() {
            this.getProduct()
        },
    methods: {
        async getProduct(){
            await this.$axios.$get(`/customers/${this.$route.params.id}`).then(success => {
                this.name = success.name;
                this.date = success.date;
                this.customers = success.customers;
            })
        },
        async sendForm($event) {
            $event.preventDefault();
            const filds = {
                name: this.name,
                date: Number(this.date),
                customers: this.customers
            }
            
            await this.$axios.$put(`/sales/${this.$route.params.id}`, filds).then(success => {
                this.$router.push({path: '/sales'})
            }).catch(error => {
                console.log (error);
            });
        }
    }
}
</script>