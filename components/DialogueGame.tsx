'use client';
import React, { useState } from 'react';

interface DialogueLine {
  character: string;
  text: string;
}

const dialogue: DialogueLine[] = [
  { character: "OBI-WAN", text: "Let her go, Anakin." },
  { character: "ANAKIN", text: "What have you and she been up to?" },
  { character: "OBI-WAN", text: "Let her go!" },
  { character: "ANAKIN", text: "You turned her against me." },
  { character: "OBI-WAN", text: "You have done that yourself." },
  { character: "ANAKIN", text: "You will not take her from me." },
  { character: "OBI-WAN", text: "Your anger and your lust for power have already done that." },
  { character: "OBI-WAN", text: "You have allowed this Dark Lord to twist your mind until now until now you have become the very thing you swore to destroy." },
  { character: "ANAKIN", text: "Don't lecture me, Obi-Wan. I see through the lies of the Jedi. I do not fear the dark side as you do." },
  { character: "ANAKIN", text: "I have brought peace, justice, freedom, and security to my new Empire." },
  { character: "OBI-WAN", text: "Your new Empire?" },
  { character: "ANAKIN", text: "Don't make me kill you." },
  { character: "OBI-WAN", text: "Anakin, my allegiance is to the Republic ... to democracy!" },
  { character: "ANAKIN", text: "If you're not with me, you're my enemy." },
  { character: "OBI-WAN", text: "Only a Sith deals in absolutes. " },
  { character: "OBI-WAN", text: "I will do what I must." },
  { character: "ANAKIN", text: "You will try." }
];

export default function DialogueGame() {
  const [currentLine, setCurrentLine] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (userInput.trim().toLowerCase() === 'nerd') {
        setCurrentLine(dialogue.length);
        setUserInput('');
        setIsCorrect(true);
      } else if (userInput.trim().toLowerCase() === dialogue[currentLine].text.toLowerCase()) {
        setIsCorrect(true);
        setCurrentLine(prev => prev + 1);
        setUserInput('');
      } else {
        setIsCorrect(false);
      }
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #0a0a0a, #1a1a1a, #0a0a0a)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        maxWidth: '32rem',
        width: '100%',
        padding: '2rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        marginTop: '-15vh'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#f3f4f6',
          letterSpacing: '0.05em',
          marginBottom: '1rem'
        }}>
          What I Must
        </h1>
        
        {currentLine < dialogue.length ? (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            width: '100%'
          }}>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#e5e7eb'
            }}>
              {dialogue[currentLine].character}
            </div>
            
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '1.125rem',
                backgroundColor: 'rgba(55, 65, 81, 0.5)',
                color: '#f3f4f6',
                border: `1px solid ${!isCorrect ? 'rgba(239, 68, 68, 0.5)' : 'rgba(75, 85, 99, 0.5)'}`,
                borderRadius: '0.5rem',
                outline: 'none',
                textAlign: 'center'
              }}
              placeholder="Type the line..."
            />
            
            {!isCorrect && (
              <p style={{
                color: '#f87171'
              }}>
                That's not quite right. Try again!
              </p>
            )}
          </div>
        ) : (
          <div style={{
            fontSize: '1.5rem',
            color: '#e5e7eb'
          }}>
            Congratulations! You've now suffered as I have suffered!
          </div>
        )}
      </div>
    </div>
  );
} 