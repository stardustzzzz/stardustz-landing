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

const AllocateCharity = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [type, setType] = useState(ERC721)
  const [address, setAddress] = useState("")
  const [tokenAmount, setTokenAmount] = useState("")

  const donate = () => {
      console.log('donate !');
  }
  return (
    <>

      <button onClick={onOpen} className="p-2 text-3xl font-bold text-right uppercase bg-green-300 border-4 border-black pxl-lg">Allocate To Charity</button>

      <Modal isOpen={isOpen} onClose={onClose} width="700px">
        <ModalOverlay />
        <ModalContent>
          <div className="bg-green-300 border-4 border-black pxl-lg p-2">Allocate To Charity</div>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column">
                <Box>

                <select name="charity" id="charity-select" className="p-2 mt-4 mr-4 text-xl font-bold text-right uppercase border-4 border-black" >
                        <option value="">--Please choose an charity--</option>
                        <option value="dog">OSF</option>
                        <option value="cat">Amnesty International</option>
                        <option value="hamster">Red Cross</option>
                        <option value="parrot">FSH Society</option>
                    </select>
                </Box>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <button className="p-2 mr-4 text-xl font-bold text-right uppercase bg-red-300 border-4 border-black pxl-lg" mr={3} onClick={onClose}>
              Close
            </button>
            <button className="p-2 text-xl font-bold text-right uppercase bg-yello-300 border-4 border-black pxl-lg" mr={3} >
              Select
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AllocateCharity;