import type { ReactNode } from "react";
import { memo } from "react";
import { makeStyles } from "./lib/ThemeProvider";

const useStyles = makeStyles()(theme => ({
    "root": {
        "borderRadius": 8,
        "boxShadow": theme.shadows[1],
        "backgroundColor": theme.colors.useCases.surfaces.surface1,
        "&:hover": {
            "boxShadow": theme.shadows[6],
        },
        "display": "flex",
        "flexDirection": "column",
    },
    "aboveDivider": {
        "padding": theme.spacing(3, 4),
        "borderBottom": `1px solid ${theme.colors.useCases.typography.textTertiary}`,
        "boxSizing": "border-box",
    },
    "belowDivider": {
        "padding": theme.spacing(4),
        "paddingTop": theme.spacing(3),
        "flex": 1,
        "display": "flex",
        "flexDirection": "column",
    },
}));

export type CardProps = {
    className?: string;
    aboveDivider?: ReactNode;
    children: ReactNode;
};

export const Card = memo((props: CardProps) => {
    const { className, aboveDivider, children } = props;

    const { classes, cx } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            {aboveDivider !== undefined && (
                <div className={classes.aboveDivider}>{aboveDivider}</div>
            )}
            <div className={classes.belowDivider}>{children}</div>
        </div>
    );
});
