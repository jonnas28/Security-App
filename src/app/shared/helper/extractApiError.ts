import { MessageService } from "primeng/api";
import { ApiBadRequestResponse } from "src/app/service/api/apiClient";

export function extractApiError(error:ApiBadRequestResponse,messageService:MessageService){
    if(error.statusCode ===400){
        messageService.add({ severity: 'error', summary: error.message, detail:error.errors![0] });
    }
    if(error.statusCode === 500){
        messageService.add({ severity: 'error', summary: 'Error!', detail:error.message });
    }
}