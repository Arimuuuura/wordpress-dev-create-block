import {
	Card as CardContainer,
	CardHeader,
	CardBody,
	CardFooter,
	__experimentalText as Text,
	__experimentalHeading as Heading,
} from '@wordpress/components';

export const Card = () => {
	return (
		<CardContainer>
			<CardHeader>
				<Heading size="4">Card Title</Heading>
			</CardHeader>
			<CardBody>
				<Text>Card Content</Text>
			</CardBody>
			<CardFooter>
				<Text>Card Footer</Text>
			</CardFooter>
		</CardContainer>
	);
}
