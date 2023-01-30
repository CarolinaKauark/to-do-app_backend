import Task from "../database/models/Task";
import { ITask, ITaskService } from "../interfaces/task.interface";

class TaskService implements ITaskService {
    constructor(private taskModel = Task){}

    async insertTask(body: ITask): Promise<any> {
        return this.taskModel.create({...body});
    }

    async getTasksByUserId(userId: number): Promise<ITask[] | []> {
        return this.taskModel.findAll({ where: { userId } });
    }
}

export default TaskService;