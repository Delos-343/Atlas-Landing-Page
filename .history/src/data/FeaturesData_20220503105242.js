import React from 'react';
import { BsPhone } from 'react-icons/bs';
import { GiConcentrationOrb } from 'react-icons/gi';
import { IoLogoXing } from 'react-icons/io';
import { HiCode } from 'react-icons/hi';
import { MdSlowMotionVideo } from 'react-icons/md';
import { FaPhotoVideo } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon size="3rem" color="#fefefe" />;

export const featuresData = [
	{
		name: 'UI/UX',
		description:
			'Userflow, Wireframing, Prototyping, Product Design',
		icon: iconStyle(BsPhone),
		imgClass: 'one',
	},
	{
		name: 'Icon/Illustration',
		description: 'Character Design, Icon Sets, Illustration Guides and Templates',
		icon: iconStyle(GiConcentrationOrb),
		imgClass: 'two',
	},
	{
		name: 'Branding',
		description: 'Visual Identity, Stationary Kits, Content Creation',
		icon: iconStyle(IoLogoXing),
		imgClass: 'three',
	},
	{
		name: 'Development',
		description: 'HTML/CSS, JavaScript, WordPress, Progressive Web Apps',
		icon: iconStyle(HiCode),
		imgClass: 'four',
	},
	{
		name: 'Motion',
		description: '2D Animations, UI Motion',
		icon: iconStyle(MdSlowMotionVideo),
		imgClass: 'five',
	},
	{
		name: 'Photography',
		description: 'Travel &' + {'\n'} + 'Product Photography',
		icon: iconStyle(FaPhotoVideo),
		imgClass: 'six',
	},
];