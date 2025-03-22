"use client";

import { useEffect, useState } from "react";
import { colors } from "@/styles/colorPalette";
import styled from "@emotion/styled";
import ThreeScene from "@/components/explore/ThreeScene";
import StepOne from "@/components/explore/quiz/StepOne";
import StepTwo from "@/components/explore/quiz/StepTwo";
import StepThree from "@/components/explore/quiz/StepThree";
import LevelBar from "@shared/LevelBar";
import Spacing from "@shared/Spacing";
import { getSearchDrink } from "@/remote/drink";
import { Drink } from "@/models/drink";
import ShowResult from "@/components/explore/quiz/ShowResult";
import { useRouter } from "next/navigation";

const Explore = () => {
  const [triggerRotation, setTriggerRotation] = useState(false);
  const [currentTexture, setCurrentTexture] = useState("/texture/test-one.jpg");
  const [currentStep, setCurrentStep] = useState(1);
  const [isDone, setIsDone] = useState(false);
  const [isFetchDone, setIsFetchDone] = useState(false);
  const [resultDrink, setResultDrink] = useState<Drink>();
  const [resetForm, setResetForm] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [formValues, setFormValues] = useState({
    carbonation: false, // 탄산(0), 탄산 아님(1)
    drinkType: 0, // 탄산(0), 스무디(1), 주스(2), 제로(3)
    carbonationLevel: 0, // 탄산 강도
    zeroOption: false, // true: 제로 선택, false: 일반 선택
    healthConcern: 0, // 0: 상관 없음, 1: 건강 신경 씀
    sweetnessLevel: 0, // 0: less, 2: normal, 4: more
  });
  const router = useRouter();

  const textureFlow = [
    "/texture/test-one.jpg",
    "/texture/test-two.jpg",
    "/texture/test-three.jpg",
    "/texture/test-four.jpg",
    "/texture/apple.jpg",
    "/texture/grape.jpg",
    "/texture/strawberry.jpg",
    "/texture/apple.jpg",
    "/texture/banana.jpg",
    "/texture/mango.jpg",
    "/texture/grape.jpg",
    "/texture/watermelon.jpg",
    "/texture/watermelon-jc.jpg",
    "/texture/avocado.jpg",
    "/texture/mango-sm.jpg",
    "/texture/tomato-sm.jpg",
    "/texture/tomato.jpg",
    "/texture/carrot.jpg",
    "/texture/broccoli.jpg",
    "/texture/ginger.jpg",
    "/texture/cherry.jpg",
    "/texture/lime.jpg",
    "/texture/grape-zero.jpg",
    "/texture/mango-zero.jpg",
    "/texture/cherry-zero.jpg",
    "/texture/apple-zero.jpg",
    "/texture/lime-zero.jpg",
    "/texture/strawberry-zero.jpg",
  ];

  const handleNext = (newValues: Partial<typeof formValues>) => {
    setFormValues((prev) => ({ ...prev, ...newValues }));

    if (currentStep === 3) {
      setIsDone(true);
      return;
    }

    setCurrentStep((prevStep) => prevStep + 1);
    setTriggerRotation(true);
  };

  const fetchDrinks = async () => {
    if (!formValues) return;

    try {
      const data = await getSearchDrink(formValues.drinkType, formValues.carbonationLevel, formValues.sweetnessLevel);
      if (data) {
        setTimeout(() => {
          setResultDrink(data);
          setCurrentTexture(data.texture);
          setIsFetchDone(true);
        }, 3000);
      } else {
        console.log("일치하는 데이터 없음");
        resetStep();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const resetStep = () => {
    setResetForm(true);
    setTimeout(() => {
      setCurrentStep(1);
      setIsDone(false);
      setIsFetchDone(false);
      setCurrentTexture("/texture/test-one.jpg");
      setResultDrink(undefined);

      setTimeout(() => {
        setResetForm(false);
      }, 500);
    }, 1000);
  };

  useEffect(() => {
    if (isDone) {
      fetchDrinks();
    }
  }, [isDone]);

  return (
    <ExploreContainer className={resetForm ? "restart" : "visible"}>
      <LeftSeciton onMouseDown={() => setIsDragging(true)} onMouseUp={() => setIsDragging(false)} isDragging={isDragging} resultExist={!!resultDrink}>
        <ThreeScene
          currentTexture={currentTexture}
          setCurrentTexture={setCurrentTexture}
          triggerRotation={triggerRotation}
          setTriggerRotation={setTriggerRotation}
          textureFlow={textureFlow}
          isFinalStep={currentStep === 3}
          zeroOption={formValues.zeroOption}
          resultExist={!!resultDrink}
          isDone={isDone}
        />
      </LeftSeciton>
      <RightSection>
        {!isDone && (
          <QuizContainer>
            <BackButton onClick={() => router.push("/")}>홈으로</BackButton>
            <Spacing size={20} />
            <LevelBar width="33%" height="10px" maxLevel={3} level={currentStep - 1} color="redOrange" subColor="peach" />
            <Spacing size={64} />
            {currentStep === 1 && <StepOne onNext={handleNext} />}
            {currentStep === 2 && <StepTwo onNext={handleNext} carbonation={formValues.carbonation} />}
            {currentStep === 3 && <StepThree onNext={handleNext} />}
          </QuizContainer>
        )}
        {isDone && !isFetchDone && <LoadingText>결과 분석 중...</LoadingText>}
        {isFetchDone && resultDrink && (
          <ResultContainer>
            <ShowResult drinkInfo={resultDrink} onRestart={resetStep} />
          </ResultContainer>
        )}
      </RightSection>
    </ExploreContainer>
  );
};

export default Explore;

const ExploreContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 900px;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: opacity 0.5s ease-in-out;

  &.restart {
    opacity: 0;
    pointer-events: none;
  }

  &.visible {
    opacity: 1;
    pointer-events: auto;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }

  @keyframes refresh {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const LeftSeciton = styled.div<{ isDragging: boolean; resultExist: boolean }>`
  width: 50%;
  height: 100%;
  flex-direction: column;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  canvas {
    cursor: ${(props) => (props.resultExist ? (props.isDragging ? "grabbing" : "grab") : "default")};
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 600px;
  }
`;

const RightSection = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 50px 40px;
  justify-content: center;
  align-items: center;
  transition: transform 1s ease-out, visibility 1s ease-out;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const BackButton = styled.button`
  width: 124px;
  padding: 12px 20px;
  font-size: 18px;
  cursor: pointer;
  background-color: ${colors.gray100};
  color: ${colors.tertiary};
  border-radius: 5px;
  border: none;
  margin: 0 0 0 auto;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: ${colors.redOrange};
    color: ${colors.primary};
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const QuizContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ResultContainer = styled.div`
  width: 100%;
`;

const LoadingText = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.tertiary};
  opacity: 0;
  animation: blink 2s 0.2s infinite;

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
