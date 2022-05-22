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
    Input,
    Flex,
    Textarea,
    Center,
    Box,
    Image,
  } from '@chakra-ui/react'
import { useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { uploadImageToIPFS, createProton } from '../utils/createProton';

const MintNFT = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [fileUrl, setFileUrl] = useState(null);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [name, setName] = useState("");

  const web3 = useWeb3React()

  const handleSubmit = () => {

      if (web3.account && web3.library && description && fileUrl && price) {
          createProton(web3.account, web3.library, name, description, fileUrl, price);
      } else {
          console.error('Error: could not make post', web3.account, web3.library, description, fileUrl, price)
      }
  };

  async function handleImageUpload(e) {
      if (
          !e ||
          !e.target ||
          !e.target.files ||
          !e.target.files[0]
      ) {
          setFileUrl(null);
          return;
      }
      const file = e.target.files[0];
      try {
          const url = await uploadImageToIPFS(file);
          setFileUrl(url);
          // setFileUrl(
          //     'https://ipfs.infura.io/ipfs/QmSKCYdovA7z7RGi7XGNwLouLEnMkBmQzb7GEUgYs8fPc1',
          // );
      } catch (error) {
          console.log(`Error uploading file: ${error}`);
      }
  }
  const renderImage = () => {
      if (fileUrl) {
          return (
              <Image
                  src={fileUrl}
                  boxSize="350px"
                  objectFit="cover"
              />
          );
      }
      return '';
  };

  return (
    <>
      <Button onClick={onOpen}>Mint NFT</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mint NFT</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              Mint NFT
              <Center>
              <Box
                  borderColor="brand.300"
                  bg={'brand.600'}
                  width="460px"
                  p={4}
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
              >
                  <Flex direction="column">
                      <Box
                          borderColor="gray.400"
                          mb={4}
                          h="300px"
                          borderWidth="1px"
                          borderRadius="lg"
                          overflow="hidden"
                      >
                          {renderImage()}
                      </Box>
                      <Input 
                          bg="gray.100"
                          placeholder="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          size="sm"
                          borderColor="gray.400"
                          mb="6"
                          borderRadius="6"
                          p="4"
                      ></Input>
                      <Textarea
                          mb={4}
                          value={description}
                          onChange={(e) =>
                              setDescription(e.target.value)
                          }
                          placeholder="description"
                          size="sm"
                          borderColor="gray.400"
                          bg="gray.100"
                          borderRadius="6"
                          p="4"
                      />
                      <Box mb={4}>
                          <Input
                              borderColor="gray.400"
                              borderRadius="6"
                              w="100px"
                              placeholder="price"
                              onChange={(e) =>
                                  setPrice(e.target.value)
                              }
                              bg="gray.100"
                              p="4"
                          />
                      </Box>
                      <Box mb={4}>
                          <input
                              type="file"
                              name="image"
                              className="MintNFT__img"
                              onChange={handleImageUpload}
                              style={{
                                  backgroundColor: "gray.400"
                              }}
                          />
                      </Box>
                      <Button
                          mb={4}
                          colorScheme={'purple'}
                          onClick={handleSubmit}
                      >
                          MINT
                      </Button>
                  </Flex>
              </Box>
          </Center>
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

export default MintNFT;