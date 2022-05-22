import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure
} from '@chakra-ui/react'


const NFTDonate = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>

      <Button onClick={onOpen} background={"transparent"}>
        <span className="my-4 text-4xl font-bold text-right text-green-400 uppercase"> Donate NFT</span>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Donate NFT</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Donate NFT
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default NFTDonate;