import { StatusBar } from "expo-status-bar";
import { Modal } from "react-native";
import { CheckCircle } from "../Icons/CheckCircle";
import { Text } from "../Text";
import { Container, OkButton } from "./styles";

interface OrderConfirmedModalProps {
  visible: boolean;
  onOk(): void;
}

export function OrderConfirmedModal({ visible, onOk }: OrderConfirmedModalProps) {
  return (
    <Modal
      visible={visible}
      animationType="fade"
    >

      <StatusBar backgroundColor="#D73035" style="light" />

      <Container>
        <CheckCircle />
        <Text
          size={20}
          weight="600"
          color="#fff"
          style={{ marginTop: 12 }}>
          Pedido confirmado
        </Text>
        <Text
          color="#fff"
          style={{ marginTop: 4, opacity: 0.9 }}>
            O pedido já entrou na fila de produção!
        </Text>

        <OkButton onPress={onOk}>
          <Text color="#D73035" weight="600">OK</Text>
        </OkButton>
      </Container>
    </Modal>
  );
}
