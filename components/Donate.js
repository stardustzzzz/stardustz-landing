import { Box, Text, Flex, Button, RadioGroup, Stack, Radio, Input } from "@chakra-ui/react"
import { useState } from 'react'

const ERC20 = 'ERC20';
const ERC721 = 'ERC721';

const Donate = () => {
    const [type, setType] = useState(ERC721)
    const [address, setAddress] = useState("")
    const [tokenId, setTokenId] = useState("")
    const [amount, setAmount] = useState("")

    const donate = () => {
        console.log('donate !');
    }
    console.log('type: ', type, address, tokenId, amount);
    return (
        <Box>
            <Text fontSize="4xl" my="4">Donate</Text>
            {/* <RadioGroup onChange={(e) => { console.log(e); setType(e); } } value={type}>
                <Stack direction='row'>
                    <Radio value={ERC20}>ERC20</Radio>
                    <Radio value={ERC721}>ERC721</Radio>
                </Stack>
            </RadioGroup> */}
            <Flex direction="column">
                <Box>
                    <Input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="NFT address" m={6} width="300px"/>
                    <Input value={tokenId} onChange={(e) => setTokenId(e.target.value)} placeholder="Token Id" m={6} width="100px"/>
                </Box>
                <Button my="6" width="100px" onClick={donate}>Donate</Button>
            </Flex>
        </Box>
    )
}

export default Donate;