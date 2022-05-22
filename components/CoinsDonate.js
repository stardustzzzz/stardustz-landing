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

const CoinsDonate = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [type, setType] = useState(ERC721)
  const [address, setAddress] = useState("")
  const [tokenAmount, setTokenAmount] = useState("")

  const donate = () => {
      console.log('donate !');
  }
  return (
    <>

      <button onClick={onOpen} className="p-2 text-3xl font-bold text-right uppercase bg-green-300 border-4 border-black pxl-lg">Donate crypto</button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="bg-green-300 border-4 border-black pxl-lg p-2">Donate crypto</div>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column">
                <Box>
                    <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Token address" className="p-2 mr-4 text-xl font-bold text-right uppercase border-4 border-black mb-4" my={6} width="300px"/>
                    <input value={tokenAmount} onChange={(e) => setTokenAmount(e.target.value)} placeholder="Amount" className="p-2 mr-4 text-xl font-bold text-right uppercase border-4 border-black" my={6} width="100px"/>


                    <button className="p-2 mr-4 mt-2  text-sm font-bold text-right uppercase bg-blue-300 border-4 border-black pxl-lg" mr={3} >
                        <div className="flex flex-row">
                            Fiat onramp
                            <Image src={'/transak.jpeg'} width="20px" height="20px" />
                        </div>
                    </button>
                </Box>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <button className="p-2 mr-4 text-xl font-bold text-right uppercase bg-red-300 border-4 border-black pxl-lg" mr={3} onClick={onClose}>
              Close
            </button>
            <button className="p-2 text-xl font-bold text-right uppercase bg-yello-300 border-4 border-black pxl-lg" mr={3} >
              Approve
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CoinsDonate;