import { ValidationError } from 'yup';
import { passwordValidation } from './validation';

export default async function countPasswordStrength(
  password: string
): Promise<number> {
  const maxStrength = 4;
  try {
    await passwordValidation.validate(
      {
        password,
      },
      { abortEarly: false }
    );
    return maxStrength;
  } catch (error) {
    if (error instanceof ValidationError) {
      return maxStrength - error.inner.length;
    }
    return 0;
  }
}
