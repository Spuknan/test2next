export const EmailTemplate = ({ name, message, email }) => (
  <div style={{ width: '100%', maxWidth: '400px', margin: '15px', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#f3f4f6' }}>
    <div style={{ padding: '15px' }}>
      <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '10px' }}>Recibiste un nuevo mensaje!</h1>
      <table style={{ width: '100%' }}>
        <tr>
          <td style={{ fontWeight: 'bold', width: '80px', paddingRight: '15px', verticalAlign: 'top' }}>Nombre:</td>
          <td style={{ verticalAlign: 'top' }}>{name}</td>
        </tr>
        <tr>
          <td style={{ fontWeight: 'bold', width: '80px', paddingRight: '15px', verticalAlign: 'top' }}>Email:</td>
          <td style={{ verticalAlign: 'top' }}>{email}</td>
        </tr>
        <tr>
          <td style={{ fontWeight: 'bold', width: '80px', paddingRight: '15px', verticalAlign: 'top' }}>Mensaje:</td>
          <td style={{ verticalAlign: 'top' }}>{message}</td>
        </tr>
      </table>
    </div>
  </div>
);
