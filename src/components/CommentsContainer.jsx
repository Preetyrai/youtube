import React from "react";

const commentsData = [
  {
    name: "Preety",
    text: "I am writing comments here1",
    replies: [
      {
        name: "Preety",
        text: "I am writing comments here2",
        replies: [
          {
            name: "Preety",
            text: "I am writing comments here3",
            replies: [
              {
                name: "Preety",
                text: "I am writing comments here4",
                replies: [
                  {
                    name: "Preety",
                    text: "I am writing comments here5",
                    replies: [
                      {
                        name: "Preety",
                        text: "I am writing comments here6",
                        replies: [  ],
                      },
                      {
                        name: "Preety",
                        text: "I am writing comments here",
                        replies: [],
                      },
                      {
                        name: "Preety",
                        text: "I am writing comments here",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
              {
                name: "Preety",
                text: "I am writing comments here",
                replies: [],
              },
              {
                name: "Preety",
                text: "I am writing comments here",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Preety",
        text: "I am writing comments here",
        replies: [
          {
            name: "Preety",
            text: "I am writing comments here",
            replies: [
              {
                name: "Preety",
                text: "I am writing comments here",
                replies: [],
              },
            ],
          },
          {
            name: "Preety",
            text: "I am writing comments here",
            replies: [],
          },
          {
            name: "Preety",
            text: "I am writing comments here",
            replies: [],
          },
        ],
      },
      {
        name: "Preety",
        text: "I am writing comments here",
        replies: [],
      },
    ],
  },
  {
    name: "Preety",
    text: "I am writing comments here",
    replies: [
      {
        name: "Preety",
        text: "I am writing comments here",
        replies: [
          {
            name: "Preety",
            text: "I am writing comments here",
            replies: [],
          },
        ],
      },
      {
        name: "Preety",
        text: "I am writing comments here",
        replies: [],
      },
      {
        name: "Preety",
        text: "I am writing comments here",
        replies: [],
      },
    ],
  },
  {
    name: "Preety",
    text: "I am writing comments here",
    replies: [],
  },
  {
    name: "Preety",
    text: "I am writing comments here",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMLorm5_s9l2JKPgkTzv61U6yVCIFHGULh7A&usqp=CAU"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-1-black ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comment :</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
