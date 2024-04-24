import { useQuery } from '@tanstack/react-query';
import { supabase } from './supabaseClient';
import useStore from './store';

const TaskList = () => {
  const authUser = useStore((state) => state.authUser);

  const fetchTasks = async () => {
    let { data: tasks, error } = await supabase
      .from('productos')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw new Error(error.message);
    }

    return tasks;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['productos', authUser],
    queryFn: fetchTasks,
  });

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Tareas</h2>
      <ul>
        {data.map((pro) => (
          <li key={pro.nombre}>{pro.descripcion}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;