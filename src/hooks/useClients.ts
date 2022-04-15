import { useEffect, useState } from "react"
import ClientCollection from "../backend/db/ClientCollection"
import Client from "../core/Client"
import RepositoryClient from "../core/RepositoryClient"
import useTableOrForm from "./useTableOrForm"

export default function useClients() {
    const repo: RepositoryClient = new ClientCollection()

    const { tableVisible, showForm, showTable } = useTableOrForm()

    const [client, setClient] = useState<Client>(Client.empty())
    const [clients, setClients] = useState<Client[]>([])

    useEffect(getAll, [])

    function getAll() {
        repo.getAll().then(clients => {
            setClients(clients)
            showTable()
        })
    }

    function selectClient(client: Client) {
        setClient(client)
        showForm()
    }

    async function deleteClient(client: Client) {
        await repo.delete(client)
        getAll()
    }

    function newClient() {
        setClient(Client.empty)
        showForm()
    }

    async function saveClient(client: Client) {
        await repo.save(client)
        getAll()
    }

    return {
        client,
        clients,
        tableVisible,
        showTable,
        saveClient,
        newClient,
        deleteClient,
        selectClient,
        getAll
    }
}