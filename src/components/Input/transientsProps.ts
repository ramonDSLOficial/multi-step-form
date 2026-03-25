import type { InputType } from "./InputContext";

export interface CommonInputProps {
    $type: InputType,
    $hasError?: boolean
}