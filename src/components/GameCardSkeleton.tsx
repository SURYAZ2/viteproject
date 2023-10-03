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
    <Card>
      <Skeleton height={"200px"} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
