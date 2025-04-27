import DialogueGame from '../components/DialogueGame';

export default function Home() {
  return (
    <main style={{ 
      margin: 0,
      padding: 0,
      minHeight: '100vh',
      background: 'bg-black linear-gradient(to bottom, #0a0a0a, #1a1a1a, #0a0a0a)'
    }}>
      <DialogueGame />
    </main>
  );
} 