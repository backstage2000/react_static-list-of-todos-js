// Add the required props
import cn from 'classnames';
import './TodoInfo.scss';

export const TodoInfo = ({ todos }) => {
  return (
    <article
      className={cn('TodoInfo', {
        'TodoInfo--completed': todos.completed,
      })}
    >
      <h2 className="TodoInfo__title">{todos.title}</h2>
      {todos.user && <UserInfo user={todos.user} />}
    </article>
  );
};

const UserInfo = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
