import { useLocation, useNavigate } from "react-router-dom"
import { PATHS } from "../routes/paths";

const ROUTES = Object.values(PATHS.steps) 

const routesIndex: Record<string, number> = Object.fromEntries(
    ROUTES.map((route, i) => [route, i])
)

type UseChangeFormStepReturn = {
    currentStep: number,
    lastFormStepIndex: number,
    changeStep: (e: React.MouseEvent) => void
}

const lastFormStepIndex = Object.values(PATHS.steps).length - 2;

const useChangeFormStep = (): UseChangeFormStepReturn => {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const currentStep = routesIndex[pathname] ?? 0
    
    const changeStep = (e: React.MouseEvent) => {
        const target = e.currentTarget as HTMLButtonElement  
        const changeForm = target.dataset?.variant 
        
        if (changeForm !== 'prev' && changeForm !== 'next') return    
        
        const nextStep = changeForm == 'next' ? currentStep + 1 : currentStep - 1
        
        if (ROUTES[nextStep]) {
            navigate(ROUTES[nextStep])
        }
    }

    return { currentStep, changeStep, lastFormStepIndex }
}

export default useChangeFormStep