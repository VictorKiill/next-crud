import Button from '../components/Button'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Table from '../components/Table'
import useClients from '../hooks/useClients'

export default function Home() {

  const { 
    newClient, 
    saveClient, 
    deleteClient, 
    selectClient, 
    client, clients, 
    tableVisible, showTable
  } = useClients()

  return (
    <div className={`flex justify-center items-center 
                    h-screen bg-gradient-to-br from-blue-800 to-blue-300
                    text-white`}>
      <Layout title='Cadastro Simples'>
        {tableVisible ?
          <>
            <div className='flex justify-end'>
              <Button className='mb-4' color='green' onClick={newClient}>
                Novo Cliente
              </Button>
            </div>
            <Table clients={clients}
              clientSelected={selectClient}
              clientExcluded={deleteClient} />
          </> :
          <Form client={client} 
          clientChanged={saveClient}
          canceled={showTable}/>
        }
      </Layout>
    </div>
  )
}
