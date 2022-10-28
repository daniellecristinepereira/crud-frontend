<!-- Crate customers-->
<template>
    <div
        class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black">
        <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
            <div class="grid grid-cols-1 p-2 gap-10">
                <div
                    class="relative flex flex-col min-w-0 break-words bg-gray-50 w-full shadow-lg rounded">
                    <div class="rounded-t mb-0 px-0 border-0">
                        <div class="flex flex-wrap items-center px-4 py-2">
                            <div class="relative w-full max-w-full flex-grow flex-1">
                                <h3 class="font-semibold text-base text-gray-900">CADASTRAR NOVO PEDIDO</h3>
                            </div>
                            <div class="relative w-full max-w-full flex-grow flex-1 text-right">
                                <nuxt-link to="/sales" class="bg-teal-400 text-white active:bg-blue-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                    VOLTAR
                                </nuxt-link>
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
                        <form  @submit="sendForm($event)" >
                            <div class="grid gap-6 mb-6 lg:grid-cols-1">
                                <div>
                                    <label for="name"
                                        class="block mb-2 text-sm font-medium text-gray-900 ">Nome
                                        do cliente</label>
                                    <input type="text" v-model="name"  
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 "
                                        placeholder="" >
                                    <!-- usada para imprimir resultado ou valor da variavel {{ name }} -->
                                </div>
                                <div>
                                    <label for="date"
                                        class="block mb-2 text-sm font-medium text-gray-900">Data do pedido
                                        </label>
                                    <input type="number" v-model="date"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" >
                                    <!--usada para imprimir resultado ou valor da variavel {{ stock }} -->
                                </div>

                                <div>
                                    <label for="email"
                                        class="block mb-2 text-sm font-medium text-gray-900">E-mail</label>
                                    <input type="text" v-model="email"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                        placeholder="" >
                                    <!-- usada para imprimir resultado ou valor da variavel {{ price }} -->
                                </div>
                            </div>
                            <div class="relative w-full max-w-full flex-grow flex-1 text-right">
                                <button 
                                    class="bg-teal-400 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded">
                                    Salvar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { create } from 'domain';

export default {
data() {
    return {
        error: [],
        name: '',
        date: '',
        customers: '',
    }
},
methods: {
    async sendForm($event) {
        $event.preventDefault();
        const filds = {
            name: this.name,
            date: Number(this.phone),
            customers: this.email,
        }
        
        await this.$axios.$post("/customers", filds).then(success => {
            this.$router.push({path: '/customers'})
        }).catch(error => {
            this.error = "Cliente não encontrado"
            
        });
        function abrirAlerta(){
            alert('')
        }
    }
    
}
}
</script>

