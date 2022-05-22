import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Flex,
    Box,
    Image
} from '@chakra-ui/react'
import { useState } from 'react'

const ERC20 = 'ERC20';
const ERC721 = 'ERC721';

const CharityJoin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [type, setType] = useState(ERC721)
  const [address, setAddress] = useState("")
  const [tokenAmount, setTokenAmount] = useState("")

  const donate = () => {
      console.log('donate !');
  }
  return (
    <>

      <button onClick={onOpen} className="p-2 text-3xl font-bold text-right uppercase bg-green-300 border-4 border-black pxl-lg">JOIN AS A CHARITY</button>

      <Modal isOpen={isOpen} onClose={onClose} width="700px">
        <ModalOverlay />
        <ModalContent>
          <div className="bg-green-300 border-4 border-black pxl-lg p-2">JOIN AS A CHARITY</div>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column">
                <Box>
                    <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Name" className="p-2 mr-4 text-xl font-bold text-right uppercase border-4 border-black mb-4" my={6} width="300px"/>
                    <input value={tokenAmount} onChange={(e) => setTokenAmount(e.target.value)} placeholder="Charity" className="p-2 mr-4 text-xl font-bold text-right uppercase border-4 border-black mb-4" my={6} width="100px"/>
                    <input value={tokenAmount} onChange={(e) => setTokenAmount(e.target.value)} placeholder="Email Address" className="p-2 mr-4 text-xl font-bold text-right uppercase border-4 border-black" my={6} width="100px"/>
                </Box>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <button className="p-2 mr-4 text-xl font-bold text-right uppercase bg-red-300 border-4 border-black pxl-lg" mr={3} onClick={onClose}>
              Close
            </button>
            <button className="p-2 text-xl font-bold text-right uppercase bg-yello-300 border-4 border-black pxl-lg" mr={3} >
              Send
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CharityJoin;