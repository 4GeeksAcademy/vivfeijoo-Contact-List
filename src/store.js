// Define el estado inicial
export const initialStore = () => {
  return {
    message: null,
    contacts: []
  };
};

// El reducer que actualiza el estado global según la acción
export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'SET_CONTACTS':
      // Reemplaza todos los contactos (cuando haces fetch desde la API)
      return {
        ...store,
        contacts: action.payload
      };

    case 'ADD_CONTACT':
      // Agrega un nuevo contacto al array
      return {
        ...store,
        contacts: [...store.contacts, action.payload]
      };

    case 'UPDATE_CONTACT':
      // Actualiza un contacto existente por su id
      return {
        ...store,
        contacts: store.contacts.map(contact =>
          contact.id === action.payload.id ? action.payload : contact
        )
      };

    case 'DELETE_CONTACT':
      // Elimina un contacto del array usando su id
      return {
        ...store,
        contacts: store.contacts.filter(contact => contact.id !== action.payload)
      };

    default:
      throw new Error('Unknown action.');
  }
}
