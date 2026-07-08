import axios from 'axios';

export async function criarEvento(evento: any) {
    /* Criar um novo evento na plataforma */

    const response = await axios.post('https://senai-evento.onrender.com/meu_app/eventos', evento);

    return response.data;
};
export async function atualizarEvento(eventoId: string, evento: any) {
    /* Atualizar informações do evento na plataforma */

    const response = await axios.put(`https://senai-evento.onrender.com/meu_app/eventos/${eventoId}`, evento);

    return response.data;
}
export async function excluirEvento(eventoId: string) {
    /* Excluir evento na plataforma */

    await axios.delete(`https://senai-evento.onrender.com/meu_app/eventos/${eventoId}`);
}
export async function consultarEventos() {
    /* Consultar eventos na plataforma */

    const response = await axios.get('https://senai-evento.onrender.com/meu_app/eventos/');

    return response.data;
}