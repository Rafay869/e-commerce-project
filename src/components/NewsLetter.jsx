import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.card}>
        <div style={styles.content}>
          <h2 style={styles.heading}>Subscribe to Our Newsletter</h2>
          <p style={styles.paragraph}>
            Get exclusive deals, new product alerts, and special offers right in your inbox.
          </p>
        </div>

        {subscribed ? (
          <div style={styles.success}>
            🎉 Thank you for subscribing! Check your inbox soon.
          </div>
        ) : (
          <form style={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
            <button type="submit" style={styles.button}>
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

// Inline Styles Object (Sab Kuch Isi File Ke Andar)
const styles = {
  section: {
    margin: '40px 0 20px 0',
    width: '100%',
  },
  card: {
    background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
    color: '#ffffff',
    padding: '44px 32px',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '20px',
    boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
  },
  content: {
    maxWidth: '500px',
  },
  heading: {
    fontSize: '26px',
    fontWeight: '800',
    letterSpacing: '-0.5px',
    marginBottom: '8px',
    color: '#ffffff',
  },
  paragraph: {
    color: '#94a3b8',
    fontSize: '15px',
    lineHeight: '1.5',
    margin: 0,
  },
  form: {
    display: 'flex',
    gap: '10px',
    width: '100%',
    maxWidth: '460px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  input: {
    flex: '1',
    minWidth: '220px',
    padding: '12px 18px',
    borderRadius: '8px',
    border: '1px solid #334155',
    background: '#0f172a',
    color: '#ffffff',
    fontSize: '14px',
    outline: 'none',
  },
  button: {
    whiteSpace: 'nowrap',
    padding: '12px 24px',
    background: '#4f46e5',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '14px',
  },
  success: {
    background: 'rgba(34, 197, 94, 0.15)',
    color: '#4ade80',
    padding: '12px 24px',
    borderRadius: '8px',
    border: '1px solid rgba(34, 197, 94, 0.3)',
    fontWeight: '600',
    fontSize: '14px',
  },
};