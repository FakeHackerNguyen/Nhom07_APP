import {Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getSchool} from '../../services/searchAuth';
import MoreText from './MoreText';

export default function SingleEducation({
  item,
  idCurrentEducation,
  onSetCurrentEducation,
}) {
  const [school, setSchool] = useState({});

  useEffect(() => {
    async function fetchSchool(item) {
      if (item) {
        const {data} = await getSchool({id: item.school});
        setSchool(data);
        if (idCurrentEducation === item.school) {
          onSetCurrentEducation(data);
        }
      }
    }

    fetchSchool(item);
  }, [item]);

  return (
    <View
      style={{
        borderBottomColor: '#EAEAEA',
        borderBottomWidth: 1,
        paddingVertical: 15,
        flexDirection: 'row',
        gap: 10,
      }}>
      <Image
        style={{
          width: 50,
          height: 50,
        }}
        source={{
          uri: school?.university?.avatar.url,
        }}
      />
      <View
        style={{
          flex: 1,
        }}>
        <Text style={{fontSize: 18, fontWeight: 700}}>
          {school?.university?.name}
        </Text>

        {item?.fieldOfStudy && (
          <Text style={{fontSize: 15, fontWeight: 500}}>
            {item?.degree && <Text>{`${item.degree}, `}</Text>}
            {item.fieldOfStudy}
          </Text>
        )}

        {item?.startYear && item?.endYear && (
          <Text
            style={{
              color: '#666',
              fontWeight: 600,
            }}>
            {`${item.startYear} - ${item.endYear}`}
          </Text>
        )}

        {item?.grade && (
          <Text
            style={{
              marginTop: 5,
              fontWeight: '500',
            }}>
            Grade: {item.grade}
          </Text>
        )}

        {item?.activities && (
          <Text
            style={{
              marginTop: 5,
              lineHeight: 21,
              fontSize: 15,
              fontWeight: '500',
            }}>
            Activities and societies: {item.activities}
          </Text>
        )}

        <View
          style={{
            marginTop: 10,
          }}>
          <MoreText>{item?.description}</MoreText>
        </View>
        {item?.skills?.length > 0 && (
          <Text
            style={{
              fontWeight: 800,
              marginTop: 10,
            }}>
            Skills:{' '}
            <Text
              style={{
                fontWeight: 600,
              }}>
              {item.skills.join(', ')}
            </Text>
          </Text>
        )}
      </View>
    </View>
  );
}
