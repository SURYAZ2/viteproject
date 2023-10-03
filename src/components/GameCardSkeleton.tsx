import React from "react";
import {
  Card,
  Text,
  CardBody,
  Heading,
  Image,
  HStack,
  space,
  Skeleton,
  SkeletonText,
  SimpleGrid,
} from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Skeleton width={"300px"} height={"200px"} />
      <CardBody>
        <SkeletonText />
        <Heading fontSize={{ sm: "xl", lg: "2xl" }}></Heading>
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
