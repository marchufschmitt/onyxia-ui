import { makeStyles } from "./lib/ThemeProvider";
import { memo } from "react";
import MuiCircularProgress from "@material-ui/core/CircularProgress";

export type CircularProgressProps = {
    className?: string;
    size?: number;
    color?: "primary" | "textPrimary";
};

const useStyles = makeStyles<Pick<Required<CircularProgressProps>, "color">>()(
    (theme, { color }) => ({
        "root": {
            "color":
                color !== "textPrimary"
                    ? undefined
                    : theme.colors.useCases.typography.textPrimary,
        },
    }),
);

export const CircularProgress = memo((props: CircularProgressProps) => {
    const { className, size = 40, color = "primary" } = props;

    const { classes, cx } = useStyles({ color });

    return (
        <MuiCircularProgress
            color={color === "textPrimary" ? undefined : color}
            className={cx(classes.root, className)}
            size={size}
        />
    );
});
