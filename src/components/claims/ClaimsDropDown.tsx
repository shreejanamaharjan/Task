import { assignedTo } from "../../data/assignTo";
import { client } from "../../data/client";

const ClaimsDropDown: React.FC<{
  user: boolean;
  onSelect: (image: string, description: string) => void;
}> = ({ user, onSelect }) => {
  const hasClientData = client && client.length > 0;
  const hasAssignedToData = assignedTo && assignedTo.length > 0;

  return (
    <>
      {user && (
        <>
          {hasClientData && (
            <>
              {client.map((item, index) => (
                <div
                  key={index}
                  className="my-4 flex items-center gap-1"
                  onClick={() => onSelect(item.image, item.description)}
                >
                  {item.image && (
                    <div className="w-5 h-5 rounded-full overflow-hidden">
                      <img
                        src={item.image}
                        alt="user"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <span className="text-xs text-gray-900 capitalize ">
                    {item.description}
                  </span>
                </div>
              ))}
            </>
          )}
        </>
      )}

      {!user && hasAssignedToData && (
        <>
          {assignedTo.map((item, index) => (
            <div
              key={index}
              className="my-4 flex items-center gap-1"
              onClick={() => onSelect(item.image, item.description)}
            >
              {item.image && (
                <div className="w-5 h-5 rounded-full overflow-hidden">
                  <img
                    src={item.image}
                    alt="assigned user"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <span className="text-xs text-gray-900 capitalize ">
                {item.description}
              </span>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default ClaimsDropDown;
