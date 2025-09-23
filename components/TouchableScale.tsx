import React from "react";
import { StyleProp, TouchableWithoutFeedback, TouchableWithoutFeedbackProps, ViewStyle } from "react-native";
import Animated, {
	cancelAnimation,
	useAnimatedStyle,
	useSharedValue,
	withTiming
} from "react-native-reanimated";

export interface TouchableScaleProps extends TouchableWithoutFeedbackProps {
	style?: StyleProp<ViewStyle>;
	children?: React.ReactNode;
	scaleTo?: number;
	animationDuration?: number;
}

export default function TouchableScale({
	children,
	style,
	scaleTo = 0.95,
	animationDuration = 150,
	onPressIn,
	onPressOut,
	...props
}: TouchableScaleProps) {

	const scale = useSharedValue(1);

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ scale: scale.value }],
	}));

	const handlePressIn = (e: any) => {
		cancelAnimation(scale);
		scale.value = withTiming(scaleTo, { duration: animationDuration });
		if (onPressIn) onPressIn(e);
	};

	const handlePressOut = (e: any) => {
		// Delay scale back up by animationDuration to ensure pressIn animation completes visually
		setTimeout(() => {
            cancelAnimation(scale);
            scale.value = withTiming(1, { duration: animationDuration });
		}, animationDuration);
		if (onPressOut) onPressOut(e);
	};

	return (
		<TouchableWithoutFeedback
			{...props}
			onPressIn={handlePressIn}
			onPressOut={handlePressOut}
		>
			<Animated.View style={[style, animatedStyle]}>
				{children}
			</Animated.View>
		</TouchableWithoutFeedback>
	);
}
