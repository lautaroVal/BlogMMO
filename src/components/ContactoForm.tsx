import { useState } from 'react';

export default function ContactoForm() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="border p-2"
      />
      <textarea
        placeholder="Mensaje"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        className="border p-2"
      />
      <button type="submit" className="bg-blue-600 text-white p-2">
        Enviar
      </button>
      {enviado && <p className="text-green-600">¡Mensaje enviado!</p>}
    </form>
  );
}