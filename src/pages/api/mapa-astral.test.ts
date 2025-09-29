import { describe, it, expect } from 'vitest';
import { POST } from './mapa-astral';

describe('API Route: /api/mapa-astral', () => {
  // Helper function to create a mock request
  const createMockRequest = (body: object) => {
    const request = new Request('http://localhost/api/mapa-astral', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    return { request };
  };

  it('should return a 400 error if the birth date is in the future', async () => {
    // Arrange: Create a date one year in the future
    const futureDate = new Date();
    futureDate.setFullYear(futureDate.getFullYear() + 1);
    const futureDateString = futureDate.toISOString().split('T')[0]; // Format: YYYY-MM-DD

    const formData = {
      nome: 'Futuro Dev',
      email: 'futuro@exemplo.com',
      data_nascimento: futureDateString,
      hora_nascimento: '10:00',
      cidade_nascimento: 'Cidade do Amanhã',
      questoes_principais: 'Como posso corrigir bugs do passado no futuro?',
      experiencias_passadas: 'Nenhuma, ainda.',
    };

    const context = createMockRequest(formData);

    // Act: Call the API endpoint handler
    const response = await POST(context);
    const data = await response.json();

    // Assert: Expect a 400 Bad Request response with a specific error message
    expect(response.status).toBe(400);
    expect(data.errors).toHaveProperty('data_nascimento');
  });

  it('should return a 200 OK for a valid submission with a past date', async () => {
    // Arrange: Create a valid form data object with a past date
    const pastDate = '1995-05-15';
    const formData = {
      nome: 'Passado Dev',
      email: 'passado@exemplo.com',
      data_nascimento: pastDate,
      hora_nascimento: '14:30',
      cidade_nascimento: 'Cidade de Ontem',
      questoes_principais: 'Este é um teste válido.',
    };
    const context = createMockRequest(formData);

    // Act
    const response = await POST(context);

    // Assert
    expect(response.status).toBe(200);
  });
});