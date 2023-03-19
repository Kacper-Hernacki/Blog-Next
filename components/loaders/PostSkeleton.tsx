"use client";
import styled from "styled-components";

function PostSkeleton() {
  return (
    <SkeletonContainer>
      <div className="skeleton-container">
        <div className="skeleton-element skeleton-shimmer w-full h-80 rounded-t-2xl"></div>
        <div className="p-3">
          <div className="skeleton-element skeleton-shimmer w-3/4 h-6 mt-3 mb-3"></div>
          <div className="skeleton-element skeleton-shimmer w-full h-4 mb-2"></div>
          <div className="skeleton-element skeleton-shimmer w-1/2 h-4 mb-3"></div>
        </div>
      </div>
    </SkeletonContainer>
  );
};

export default PostSkeleton;

const SkeletonContainer = styled.div`
  .skeleton-container {
    /* Add any necessary container styles here */
  }

  .skeleton-element {
    background-color: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
  }

  .skeleton-shimmer {
    position: relative;
    overflow: hidden;
  }

  .skeleton-shimmer::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%);
    animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(100%);
    }
  }

`;