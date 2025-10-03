import { Box, Stack } from "@mui/material";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { ReactNode, useEffect, useRef } from "react";

interface ScrollableContentProps {
  children: ReactNode;
  isRTL: boolean;
  onScrollRef?: (ref: HTMLElement | null) => void;
}

const ScrollableContent = ({ children, isRTL, onScrollRef }: ScrollableContentProps) => {
  const scrollRef = useRef<HTMLElement>();

  useEffect(() => {
    if (onScrollRef) {
      onScrollRef(scrollRef.current || null);
    }
  }, [onScrollRef]);

  return (
    <Box
      ref={scrollRef}
      sx={{
        position: "relative",
        "& .ps": {
          direction: isRTL ? "rtl" : "ltr",
        },
      }}
    >
      <PerfectScrollbar
        options={{
          suppressScrollY: true,
          useBothWheelAxes: true,
          wheelPropagation: false,
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            flexDirection: isRTL ? "row-reverse" : "row",
            minWidth: "min-content",
            pb: 2,
            px: 1,
            "& .ps__rail-x": {
              height: "10px",
              borderRadius: "5px",
              opacity: 0.6,
              backgroundColor: "background.paper",
              "& .ps__thumb-x": {
                height: "6px",
                borderRadius: "3px",
                backgroundColor: "divider",
              },
            },
            "& .ps__rail-x:hover": {
              opacity: 0.9,
              "& .ps__thumb-x": {
                height: "8px",
              },
            },
          }}
        >
          {children}
        </Stack>
      </PerfectScrollbar>
    </Box>
  );
};

export default ScrollableContent;
