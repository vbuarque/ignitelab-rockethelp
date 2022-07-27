import { HStack, Spinner, Heading } from 'native-base';

export function Loading() {
  return (
    <HStack flex={1} bg="gray.700" space={2} justifyContent="center" alignItems="center">
      <Spinner color="emerald.500" />
      <Heading color="emerald.500" fontSize="md">
        Carregando
      </Heading>
    </HStack>
  );
}