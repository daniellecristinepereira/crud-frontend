<template>
    <!-- fundo da pagina -->
    <div class="mine-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-100 ">
        <div class="h-full ml-10 mt-16 mb-2 md:ml-64">
            
            <div class="mt-4 mx-4">
                <div class="w-full overflow-hidden rounded-lg shadow-xs">
                    <div class="w-full overflow-x-auto">
                        <table class="w-full">
                            <div class="overflow-x-auto">
                                <div class="grid grid-cols-1 gap-2">
                                    <div
                                        class="relative flex flex-col break-words bg-gray-200 w-full shadow-lg">
                                        <div class="rounded-t mb-0 px-0 border-0">
                                            <div class="flex flex-wrap items-center px-4 py-6">
                                                <div class="relative w-full max-w-full flex-grow flex-1">
                                                    <h3 class="font-semibold text-base text-gray-900 ">
                                                        PEDIDOS DE VENDA </h3>
                                                </div>
                                               
                                                <div class="relative w-full max-w-full flex-grow flex-1 text-right">
                                                    <router-link to="/sales/create"
                                                        class="bg-teal-400 text-white active:bg-teal-800 text-xs font-bold uppercase px-4 py-1 rounded outline-2 focus:outline-none mr-1 mb-4 ease-linear transition-all duration-150">
                                                         NOVO PEDIDO</router-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <div
                                    class="min-h-screen bg-gray-100 flex justify-cente font-sans flex flex-col min-w-0 break-words rounded">
                                    <div class="w-full ">
                                        <div class="bg-white shadow-md rounded">
                                            <table class="min-w-max w-full table-auto">
                                                <thead>
                                                    <tr
                                                        class="bg-gray-200 text-teal-400 uppercase text-sm ">
                                                        <th class="py-3 px-6 text-left">Numero do Pedido</th>
                                                        <th class="py-3 px-6 text-left">Data</th>
                                                        <th class="py-3 px-6 text-left">Cliente</th>
                                                        <th class="py-3 px-6 text-left">Total</th>
                                                        <th class=""></th>
                                                    </tr>
                                                </thead>
                                                <tbody class="bg-white divide-y ">

                                                    <tr v-for="(sales, index) in sales" :key="index"
                                                        class="bg-gray-50 text-gray-700 ">
                                                        <td class="py-3 px-8 text-left"> {{ sales.number }}</td>
                                                        <td class="py-3 px-8 text-left"> {{ sales.date }}</td>
                                                        <td class="py-3 px-8 text-left"> {{ sales.custumers }}</td>
                                                        <td class="py-3 px-8 text-left"> {{ $format_money(product.price.$numberDecimal, false) }}</td>
                                                        <td class="py-3 px-18 text-left">
                                                            <div class="flex item-center ">
                                                                <Nuxt-link :to="`/sales/${sales._id}`"
                                                                    class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                        viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="2"
                                                                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                                    </svg>
                                                                </Nuxt-link>

                                                                <div @click="deleteProduct(sales._id, index)"
                                                                    class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                        viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="2"
                                                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                    </svg>
                                                                    
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </table>
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
            sales: [],
            error: ""
        }
    },
    mounted() {
        this.getcustomers()
    },
    methods: {
        async getcustomers() {
            await this.$axios.$get("/sales").then(success => {
                this.sales = success
            }).catch(error => {
                this.error = "pedido não encontrado"
            });
        },
        async deleteProduct(id, index) {
            let confirmation = confirm("Deseja realmente deletar?")
            if (confirmation == true) {
                await this.$axios.$delete(`/sales/${id}`).then(success => {
                    
                    this.$toast.success("Deletado com sucesso.")

                    // this.$toast.error("")
                    // this.$toast.warning("")

                    this.customers.splice(index, 1)
                })
            }
        }
    }
}
</script>