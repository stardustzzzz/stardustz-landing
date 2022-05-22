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

      <button onClick={onOpen} className="text-3xl font-bold text-right uppercase  btn-success pxl-lg btn"> Donate NFT</button>

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