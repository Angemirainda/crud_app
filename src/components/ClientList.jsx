//ClientList.jsx
import React, {useState, useEffect} from 'react';
import {Link ,redirect, useNavigate} from 'react-router-dom';
import axios from 'axios';

const ClientList = () => {
    const [clients, setClients] = useState([]); //initialisation du tableau clients
    const navigate = useNavigate();

    const fetchData = async () =>{
        const response = await axios.get('http://localhost:3001/clients');
        console.log(response.data); //affichage du resultat de la requete dans la console
        setClients(response.data); //chargement du resultat de la requete

    };
    useEffect(() => {
        fetchData();
    }, []);//[] signifie que le useEffect ne sera appelé qu'une seule fois lors du premier rendu du composant

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3001/clients/${id}`);
        fetchData();
    } 

//     return(
//         <div>
//             <center>
//                 <h1 className=' text-3xl font-bold'>Liste des Clients</h1>
//                 <Link to='clients/create' className="btn btn-primary "><button type="button" className=''>Ajouter</button></Link>
//                 <table style={{border:'1px solid black'}}>
//                     <thead>
//                         <tr>
//                             <th>Nom</th>
//                             <th>Adresse</th>
//                             <th>Telephone</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {clients.map((client) => ( //map permet de parcourir le tableau clients et d'afficher chaque client dans une ligne du tableau)
//                             <tr key={client.id}>
//                                 <td><Link to={`/clients/${client.id}`}>{client.nom}</Link></td>
//                                 <td>{client.adresse}</td>
//                                 <td>{client.tel}</td>
//                                 <td>{/*colonne operations (modifier, supprimer)*/}</td>
//                                 <td><Link to={`/clients/${client.id}/update`}> <button>Modifier</button> </Link>
//                                 <button onClick={()=>handleDelete(client.id)}>Supprimer</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </center>
//         </div>
//     );



// };

return (
    <div className="max-w-6xl mx-auto p-8 bg-white rounded-lg mt-8">
        <div className="text-center mb-8">
            <h1 className="text-4xl font-semibold text-gray-800">Liste des Clients</h1>
        </div>

        {/* Bouton "Ajouter" centré */}
        <div className="text-center mb-6 font-semibold">
            <Link
                to="/create"
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
                Ajouter un Client
            </Link>
        </div>

        {/* Tableau stylisé */}
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto bg-gray-50  border border-gray-200 rounded-lg shadow-md">
                <thead className="bg-gray-100 text-gray-700">
                    <tr>
                        <th className="py-3 px-6 text-left text-sm font-semibold">Nom</th>
                        <th className="py-3 px-6 text-left text-sm font-semibold">Adresse</th>
                        <th className="py-3 px-6 text-left text-sm font-semibold">Téléphone</th>
                        <th className="py-3 px-6 text-left text-sm font-semibold">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((client) => (
                        <tr key={client.id} className="hover:bg-gray-100 transition duration-200">
                            <td className="py-3 px-6 text-sm text-gray-800">
                                <Link to={`/clients/${client.id}`} className="text-blue-500 hover:underline">
                                    {client.nom}
                                </Link>
                            </td>
                            <td className="py-3 px-6 text-sm text-gray-700">{client.adresse}</td>
                            <td className="py-3 px-6 text-sm text-gray-700">{client.tel}</td>
                            <td className="py-3 px-6 text-sm">
                                <div className="flex space-x-4">
                                    <Link
                                        to={`/clients/${client.id}/update`}
                                        className="bg-yellow-500 text-white px-4 font-semibold py-2 rounded-lg hover:bg-yellow-600 transition duration-200"
                                    >
                                        Modifier
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(client.id)}
                                        className="bg-red-500 text-white px-4 py-2 font-semibold rounded-lg hover:bg-red-600 transition duration-200"
                                    >
                                        Supprimer
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);
};

export default ClientList;