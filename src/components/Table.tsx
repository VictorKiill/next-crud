import Client from "../core/Client"
import { EditIcon, TrashIcon } from "./Icons"

interface TableProps {
    clients: Client[]
    clientSelected?: (client: Client) => void
    clientExcluded?: (client: Client) => void
}

export default function Table(props: TableProps) {

    const showActions = props.clientSelected || props.clientExcluded

    function renderTableHeader() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {showActions ? <th className="text-left p-4">Ações</th> : false}
            </tr>
        )
    }

    function renderClientsData() {
        return props.clients?.map((client, i) => {
            return (
                <tr key={client.id} className={i % 2 === 0 ? 'bg-blue-200' : 'bg-blue-100'}>
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.name}</td>
                    <td className="text-left p-4">{client.age}</td>
                    {showActions ? renderActions(client) : false}
                </tr>
            )
        })
    }

    function renderActions(client: Client) {
        return (
            <td className="flex">
                {props.clientSelected ? (
                    <button onClick={() => props.clientSelected?.(client)} className={`
                    flex justify-center items-center
                    text-green-600 rounded-full p-2 m-1
                    hover:bg-blue-50
                `}>
                        {EditIcon()}
                    </button>
                ) : false}
                {props.clientExcluded ? (
                    <button onClick={() => props.clientExcluded?.(client)} className={`
                    flex justify-center items-center
                    text-red-600 rounded-full p-2 m-1
                    hover:bg-blue-50
                `}>
                        {TrashIcon()}
                    </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                bg-gradient-to-r from-blue-500 to-blue-700 text-gray-100
            `}>
                {renderTableHeader()}
            </thead>
            <tbody>
                {renderClientsData()}
            </tbody>
        </table>
    )
}