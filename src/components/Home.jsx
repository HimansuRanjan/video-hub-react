import { Box, Heading, Image, Container, Stack, Text} from '@chakra-ui/react'
import React from 'react'
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions = {
    pos: 'absolute',
    left: "50%",
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl',
}

const Home = () => {
  return (
    <Box>
      <MyCarousel/>

      <Container minH={'100vh'} maxW={'container.xl'} p={'16'}>
        <Heading 
        textTransform={"uppercase"} 
        py='2' 
        w={'fit-content'}
        borderBottom={'2px solid'}
        m='auto'>
            Services
            </Heading>

        <Stack
        h={'full'}
        p={'4'}
        alignItems={'center'}
        direction={['column', 'row']}
        >
            <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'}/>
            <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4', '16']} textAlign={'center'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatem labore perferendis, eius expedita veniam molestiae dolore quaerat voluptate earum placeat aspernatur laboriosam, quisquam fugit ea illum culpa quod, quibusdam deserunt vel ducimus consequatur cupiditate nemo corporis! Repellat adipisci eveniet voluptates, quidem officiis explicabo quam molestias, et modi unde porro quaerat dolore sint harum ipsum minus neque dolorum. Soluta sit voluptatem hic aliquid quisquam consequuntur vel quidem, beatae numquam! Molestias aspernatur magni quae nesciunt minima commodi debitis obcaecati reprehenderit ex distinctio. Velit quo recusandae nulla, porro ad numquam unde error totam ipsam minima eaque voluptatibus asperiores fugit commodi ullam laudantium libero reiciendis? Id ex dolore ea, suscipit vero ratione corporis natus. Quibusdam mollitia dolor temporibus maxime cum quos accusantium vero expedita atque. Placeat vitae iure vel laudantium libero cum earum quidem. Voluptatibus ratione aut architecto cum ex cupiditate vero repudiandae quidem, beatae minima fugiat. 
            </Text>
        </Stack>

      </Container>
      
    </Box>
  )
};

const MyCarousel = ()=>(
    <Carousel 
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
    >
        <Box w={'full'} h={'100vh'}>
            <Image src={img1} h={'full'} w={'full'} objectFit={'cover'}/>
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                Watch the Future
            </Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
            <Image src={img2} h={'full'} w={'full'} objectFit={'cover'}/>
            <Heading bgColor={'whiteAlpha.600'} color={'black'}  {...headingOptions}>
                Future is Gaming
            </Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
            <Image src={img3} h={'full'} w={'full'} objectFit={'cover'}/>
            <Heading bgColor={'whiteAlpha.600'} color={'black'}  {...headingOptions}>
                Gaming of Console
            </Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
            <Image src={img4} h={'full'} w={'full'} objectFit={'cover'}/>
            <Heading bgColor={'whiteAlpha.600'} color={'black'}  {...headingOptions}>
                Night life is cool
            </Heading>
        </Box>

    </Carousel>
)

export default Home
