import { useRouter } from "expo-router";

export const useNavigateBookDetails = () => {

    const router = useRouter();

  const navigateToBookDetails = (bookId: number) => {
        router.push({
            pathname: '/(screens)/bookDetails',
            params: { bookId },
        })
    }

 return navigateToBookDetails;
}

