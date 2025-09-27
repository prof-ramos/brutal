import type { APIRoute } from 'astro';
import { z } from 'zod';

// Define the schema for the form data using Zod
const AstralFormSchema = z.object({
  nome: z.string().min(3, { message: 'O nome completo é obrigatório e deve ter no mínimo 3 caracteres.' }),
  email: z.string().email({ message: 'Por favor, insira um email válido.' }),
  data_nascimento: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: 'A data de nascimento é obrigatória.' }),
  hora_nascimento: z.string().regex(/^\d{2}:\d{2}$/, { message: 'O horário de nascimento é obrigatório.' }),
  cidade_nascimento: z.string().min(2, { message: 'A cidade de nascimento é obrigatória.' }),
  questoes_principais: z.string().min(10, { message: 'Descreva suas questões principais com pelo menos 10 caracteres.' }),
  experiencias_passadas: z.string().optional(),
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    // Validate the data against the schema
    const validationResult = AstralFormSchema.safeParse(data);

    if (!validationResult.success) {
      return new Response(JSON.stringify({
        message: 'Erro de validação.',
        errors: validationResult.error.flatten().fieldErrors,
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // --- A LÓGICA REAL DA API VIRIA AQUI ---
    // Por enquanto, apenas simulamos o sucesso se a validação passar.

    const mockJsonData = {
      signo: "Leão",
      ascendente: "Áries",
      lua: "Sagitário",
      mensagem: "Você é uma pessoa de personalidade forte e impulsiva, com um coração generoso.",
      data: validationResult.data.nome,
    };

    const mockSvgData = `
      <svg width="100%" height="300" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <rect x="4" y="4" width="calc(100% - 8px)" height="calc(100% - 8px)" fill="#BFFF00" stroke="#000" stroke-width="8" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-size="24" font-weight="bold" fill="#000">SIGNO: ${mockJsonData.signo}</text>
        <text x="50%" y="65%" dominant-baseline="middle" text-anchor="middle" font-family="Inter, sans-serif" font-size="16" fill="#000">Ascendente: ${mockJsonData.ascendente}</text>
      </svg>
    `;

    return new Response(JSON.stringify({
      jsonData: mockJsonData,
      svgData: mockSvgData,
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    return new Response(JSON.stringify({
      message: 'Erro no servidor ao processar a requisição.',
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
