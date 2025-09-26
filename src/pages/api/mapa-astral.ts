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

    return new Response(JSON.stringify({
      message: 'Dados recebidos e validados com sucesso! Em breve você receberá seu mapa astral.'
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
