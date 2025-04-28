import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/screen'); // Redireciona para a página do portfólio
  }, [router]);

  return null;
}