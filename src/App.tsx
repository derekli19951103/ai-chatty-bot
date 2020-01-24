import React from "react";
import "./App.css";
import ChatBot from "react-simple-chatbot";

const App: React.FC = () => {
  const steps: {
    id: string;
    message?: any;
    user?: boolean;
    end?: boolean;
    trigger?: string;
  }[] = [
    {
      id: "0",
      message: "和我说话",
      trigger: "1"
    }
  ];
  const talks = 10;
  for (let i = 1; i < talks; i += 2) {
    steps.push({
      id: `${i}`,
      user: true,
      trigger: `${i + 1}`
    });
    steps.push({
      id: `${i + 1}`,
      message: ({ previousValue }: any) => AI(previousValue),
      trigger: `${i + 2}`
    });
  }
  steps.push({
    id: `${talks + 1}`,
    user: true,
    trigger: `${talks + 2}`
  });
  steps.push({
    id: `${talks + 2}`,
    message: "不和你多说了 掰掰",
    end: true
  });

  const AI = (input: string) => {
    return input
      .replace("吗", "")
      .replace("?", "!")
      .replace("？", "！")
      .replace("你", "我");
  };

  return (
    <div className="wrapper">
      <div className="chatbox-wrapper">
        <ChatBot
          headerTitle="人 工 智 能"
          placeholder="讲点什么。。。"
          steps={steps}
        />
      </div>
    </div>
  );
};

export default App;